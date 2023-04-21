
import {motion} from 'framer-motion'
function Loader() {
  return (
  
          <div className="flex items-center justify-center h-screen">
            <motion.div
              className="w-16 h-16 border-4 border-gray-900 rounded-full animate-spin"
            ></motion.div>
          </div>
    
  )
}

export default Loader