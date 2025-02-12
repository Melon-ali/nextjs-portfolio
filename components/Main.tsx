import { motion } from "framer-motion";


const Main = () => {
    return (
        <section className="py-32 relative id='work'" >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.6}} className="flex flex-col items-center mb-20">
                    <h2>Selected Work</h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Main;