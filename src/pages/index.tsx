import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { useState } from 'react';
import axios from 'axios';
import { User } from '@/types'
import Modal from '@/components/modal';
import { Loader, ModalContainer } from '@/components/styles';

export default function Home() {
  const [search, setSearch] = useState('');
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [userModal, setUserModal] = useState('');
  const [showLoader, setShowLoader] = useState(false);


  const searchByEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && search) {
      handleSearch();
    }
  }

  const dispatchModal = (user: string) => {
    setUserModal(user);
    setShowModal(true);
  }

  const handleSearch = () => {
    setShowLoader(true);
    axios.get(`https://api.github.com/search/users?q=${search}`).then(res => {
      setEmptyMessage(Boolean(!res.data.items.length));
      setUsers(res.data.items);
    }).catch(() => {
      window.alert('erro ao consultar api');
    }).finally(() => {
      setShowLoader(false);
    })
  }

  return (
    <>
      <Head>
        <title>Create Next </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/github.png"
          alt="Github Logo"
          width={330}
          height={165}
        />
        <div className={styles.input}>
          <label htmlFor='search'>
            <Image
              src="/search.png"
              alt="search icon"
              width={15}
              height={15}
            />
          </label>
          <input type="text" id='search' value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={(e: any) => searchByEnter(e)} />
        </div>
        <button className={`${styles.buttonSearch} ${!search && styles.buttonDisable}`} onClick={handleSearch} disabled={!search}>Pesquisar</button>
        <div className={styles.userContainer}>
          {users.map(user => {
            return (
              <div className={styles.user} key={user.login}>
                <Image
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  width={100}
                  height={100}
                />
                <div>
                  <p>{user.login} | <a href={user.html_url}>link do perfil</a></p>
                  <button onClick={() => dispatchModal(user.login)}>Detalhes do usuário</button>
                </div>
              </div>
            )
          })}
        </div>
        {
          emptyMessage && <h2 className={styles.emptyMessage}>Desculpe, não conseguimos localizar o usuário :/</h2>
        }
        {
          showModal && <Modal user={userModal} closeModal={ () => setShowModal(false)}/>
        }
        {
          showLoader && 
          <ModalContainer>
            <Loader></Loader>
          </ModalContainer>
        }
      </main>
    </>
  )
}
