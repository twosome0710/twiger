import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from './index.module.css';

const IndexPage = () => (
  <Layout title="Twiger">
    <div className={styles.container}>
      <div className={styles.content_area}>
        <div>
          <Image src="/images/logo_blue.svg" alt="트위저" width={45} height={45} />
        </div>
        <p className={styles.main_phrase}>지금 일어나고 있는 일</p>
        <p className={styles.signup_phrase}>오늘 트위저에 가입하세요.</p>
        <div className={styles.link_wrap}>
          <Link href="#">
            <a className={styles.signup_link}>가입하기</a>
          </Link>
          <Link href="#">
            <a className={styles.signin_link}>로그인</a>
          </Link>
        </div>
      </div>
      <div className={styles.background_area}>
        <Image
          src="/images/logo_white.svg"
          alt=""
          width={400}
          height={400}
          className={styles.logo}
        ></Image>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
