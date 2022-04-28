import Marquee from 'react-fast-marquee';

import styles from './SectionTitle.module.scss';

const SectionTitle = () => {
  return (
    <section className={styles.projects}>
      <div className="inner-wrapper">
        <div className="marquee-container">
          <h2 className="marquee">Projectssss</h2>
        </div>
        {/* <Marquee play>
          I can be a React component, multiple React components, or just some text.
        </Marquee> */}
      </div>
    </section>
  );
};
export default SectionTitle;
