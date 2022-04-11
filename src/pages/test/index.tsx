import { GetServerSideProps, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  console.log('check here');
  return { props: { data: [{ a: 'b' }] } };
};

const Test = (props: any) => {
  console.log('props', props);
  return <div>Test</div>;
};

export default Test;
