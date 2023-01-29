import ProjectData from '../public/workPagesContent.json';
import { RobotoSerif, roboto } from '../helpers/fonts';
import { motion } from 'framer-motion';
import LightboxURL from '../components/Lightbox/LightboxURL';

export default function Home() {
  const { productImages } = ProjectData;

  return (
    <motion.div className='project--container'>
      <section className="project--images-section">
        <h3 className={`project--images-title ${RobotoSerif.className}`}>Project Images:</h3>
        <LightboxURL imageList={productImages} nextFontAccess={roboto.className} />
      </section>
    </motion.div>
  );
}