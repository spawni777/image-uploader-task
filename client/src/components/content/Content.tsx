import Header from '@/components/content/Header';
import { CSSTransition } from "react-transition-group";
import Body from '@/components/content/Body';
// import {useSelector} from 'react-redux';
// import { IRootState } from '@/types/storage';

const Content = () => {
  // const hasImagesData = useSelector<IRootState, boolean>(({images}) => images.totalNumber !== 0);
  // const imagesFetched = useSelector<IRootState, boolean>(({ images }) => images.statuses.fetched);
  //
  // if (!imagesFetched) return null;
  //
  // const contentIsOpen = imagesFetched && hasImagesData;

  return (
    <CSSTransition
      in={true}
      timeout={200}
      classNames="fade"
      unmountOnExit
    >
      <>
        <Header />
        <Body />
      </>
    </CSSTransition>
  )
}

export default Content;
