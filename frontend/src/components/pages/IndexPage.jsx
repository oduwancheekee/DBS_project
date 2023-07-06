// import IndexLayout from '../../../layouts/IndexLayout';
// import IndexLayout from '../../layouts/IndexLayout';
import IndexMainContent from '../contents/IndexMainContent';
import IndexLayout from '../layouts/IndexLayout';

function IndexPage(props) {
  return (
    <div>
      <IndexLayout>
        <IndexMainContent onNormalTableClick={props.onClick} />
      </IndexLayout>
    </div>
  );
}

export default IndexPage;
