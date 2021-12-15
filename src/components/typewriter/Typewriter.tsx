import PhraseMagazine from '@/components/phrase-magazine/PhraseMagazine';
import styles from '@/styles/components/Typewriter.module.css';

const Typewriter = () => {
    return (
        <div className={styles.typewriter}>
            <PhraseMagazine />
            <div className={styles.MegaInputBox}>
                <input type="text" />
            </div>
        </div>
    );
};

export default Typewriter;
