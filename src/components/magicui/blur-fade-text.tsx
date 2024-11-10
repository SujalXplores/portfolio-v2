'use client';

import { AnimatePresence, type Variants } from 'framer-motion';

import { MotionSpan } from '@/lib/types';
import { cn } from '@/lib/utils';

interface BlurFadeTextProps {
	text: string;
	className?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	duration?: number;
	characterDelay?: number;
	delay?: number;
	yOffset?: number;
	animateByCharacter?: boolean;
}

const BlurFadeText = ({
	text,
	className,
	variant,
	characterDelay = 0.03,
	delay = 0,
	yOffset = 8,
	animateByCharacter = false,
}: BlurFadeTextProps) => {
	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: 'blur(8px)' },
		visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
	};
	const combinedVariants = variant || defaultVariants;
	const characters = Array.from(text).map((char, i) => ({
		char,
		key: `${text}-${char}-${i}`,
	}));

	if (animateByCharacter) {
		return (
			<div className="flex">
				<AnimatePresence>
					{characters.map(({ char, key }, i) => (
						<MotionSpan
							key={key}
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={combinedVariants}
							transition={{
								yoyo: Number.POSITIVE_INFINITY,
								delay: delay + i * characterDelay,
								ease: 'easeOut',
							}}
							className={cn('inline-block', className)}
							style={{ width: char.trim() === '' ? '0.2em' : 'auto' }}
						>
							{char}
						</MotionSpan>
					))}
				</AnimatePresence>
			</div>
		);
	}

	return (
		<div className="flex">
			<AnimatePresence>
				<MotionSpan
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={combinedVariants}
					transition={{
						yoyo: Number.POSITIVE_INFINITY,
						delay,
						ease: 'easeOut',
					}}
					className={cn('inline-block', className)}
				>
					{text}
				</MotionSpan>
			</AnimatePresence>
		</div>
	);
};

export default BlurFadeText;
