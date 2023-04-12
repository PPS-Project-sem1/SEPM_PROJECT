import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@livepeer/react';
import { CONTRACT_ADDRESS, abi } from '../../constants';
import Web3Modal from 'web3modal';
import { providers, Contract } from 'ethers';

const Project = () => {
  const [projectInfo, setProjectInfo] = useState({});
  const [projectID, setProjectID] = useState(1);

  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    console.log(web3ModalRef);
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const network = await web3Provider.getNetwork();
    if (network.chainId !== 5) {
      window.alert('Change your network to goerli testnet');
      throw new Error('Change to goerli testnet');
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const investInProject = async projectID => {
    try {
      const signer = await getProviderOrSigner(true);
      const contract = new Contract(CONTRACT_ADDRESS, abi, signer);
      const tx = await contract.funding(projectID);
      await tx.wait();
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: 'goerli',
      providerOptions: {},
      disableInjectedProvider: false,
    });
  }, []);

  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-2">
      <div className="text-5xl font-bold">
        <p>Votechain</p>
      </div>
      <div className="flex text-sm md:text-xl">
        <p>Project Description : </p>
        <p>A decentralized voting platform</p>
      </div>
      <div className="flex text-sm md:text-xl">
        <p>Owner : </p>
        <p>0x1e87f3F4FDBb276250fC064a3cf0069592280601</p>
      </div>
      <div className="flex text-sm md:text-xl">
        <p>Investment Goal : </p>
        <p>200</p>
      </div>
      <div className="flex text-sm md:text-xl">
        <p>Investment Progress : </p>
        <p>0</p>
      </div>
      <div className="w-[60%] h-[60%] flex flex-col justify-center m-5">
        <Player
          title="Waterfalls"
          playbackId="92e24klizjz8bsqg"
          showPipButton
          showTitle={false}
          aspectRatio="16to9"
          controls={{
            autohide: 3000,
          }}
        />
        <button className="mt-5" onClick={() => investInProject(projectID)}>
          Invest
        </button>
      </div>
    </div>
  );
};

export default Project;
