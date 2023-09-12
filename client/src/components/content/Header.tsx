import styles from '@/styles/components/content/header.module.scss';
import UIContainer from '@/components/ui/UIContainer';
import UIButton from '@/components/ui/UIButton';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@/types/storage';
import { setModalIsOpen } from '@/store/modal.store';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const imagesFetched = useSelector<IRootState, boolean>(state => state.images.statuses.fetched);
  const imagesTotalNumber = useSelector<IRootState, number>(state => state.images.totalNumber);

  const dispatch = useDispatch();

  const showUploadModal = () => {
    dispatch(setModalIsOpen({modalName: 'uploading', isOpen: true}));
  }

  return (
    <>
      <UIContainer className={styles.headerContainer}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
              <img src="/logo.png" alt="logo"/>
            </div>
            <div className={styles.headerInfo}>
              <CSSTransition
                in={!imagesFetched}
                timeout={200}
                classNames="fade"
                unmountOnExit
              >
                <div className={styles.skeleton}>
                  <Skeleton
                    height={16}
                    width={150}
                  />
                </div>
              </CSSTransition>
              {imagesTotalNumber} images stored in keeper
            </div>
          </div>
          <div
            className={`${styles.headerBtn} ${imagesFetched ? styles.headerBtnFetched : ''}`}
          >
            <UIButton
              icon="upload"
              text="Upload image"
              onClick={showUploadModal}
            />
          </div>
        </header>
      </UIContainer>

      <div className={styles.delimiter} />
    </>
  )
}

export default Header;
