import { motion, AnimatePresence } from 'framer-motion'
import { useAnimationStore } from '../../store/dataStore'

interface AnimatedWrapperProps {
	component: React.ComponentType
	[key: string]: any
}

export default function AnimatedWrapper({
	component: Component,
	...props
}: AnimatedWrapperProps) {
	const animationProps = useAnimationStore((state) => state.animationProps)
	return (
		<AnimatePresence>
			<motion.div {...animationProps} style={{ width: '100%' }} {...props}>
				<Component />
			</motion.div>
		</AnimatePresence>
	)
}
