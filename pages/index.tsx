//@ts-nocheck
import Menu from '@/components/menu/Menu';
import Card from '@/components/cards/cards';
import Web3Modal from 'web3modal';
import { providers, Contract } from 'ethers';
import { useState, useEffect, useRef } from 'react';
import { CONTRACT_ADDRESS, abi } from '../constants';
import Link from 'next/link';
import blockchain from '../public/blockchain.png';

export default function Home() {
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef?.current.connect();
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

  const allProjects = async () => {
    try {
      const provider = await getProviderOrSigner();
      const contract = new Contract(CONTRACT_ADDRESS, abi, provider);
      const projID = await contract.receiveProjectid();
      console.log(projID._hex);
      let projectInfo = [];
      for (let i = 0; i < projID; i++) {
        const project = await contract.projectlist(i);

        projectInfo.push(project);
      }
      console.log(projectInfo);
      return projectInfo;
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
    const data = allProjects();
  }, []);

  return (
    <>
      <Menu />
      <div className="flex justify-center item-center">
        <div className="h-screen w-screen">
          <img src="/blockchain.gif" alt="" className="h-full w-full" />
        </div>
        <h3 className="absolute text-white md:font-bold mt-60  text-9xl">
          VotEase
        </h3>
      </div>
    </>
  );
}
