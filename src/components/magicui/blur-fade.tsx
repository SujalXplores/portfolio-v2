'use client';

import { AnimatePresence, type Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { RefObject } from 'react';

import { MotionDiv } from '@/lib/types';

interface BlurFadeProps {
	children: React.ReactNode;
	className?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	duration?: number;
	delay?: number;
	yOffset?: number;
	inView?: boolean;
	inViewMargin?: any;
	blur?: string;
}

const BlurFade = ({
	children,
	className,
	variant,
	duration = 0.4,
	delay = 0,
	yOffset = 6,
	inView = false,
	inViewMargin = '-50px',
	blur = '6px',
}: BlurFadeProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const inViewResult = useInView(ref as RefObject<Element>, {
		once: true,
		margin: inViewMargin,
	});

	const isInView = !inView || inViewResult;

	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
		visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
	};

	const combinedVariants = variant || defaultVariants;

	return (
		<AnimatePresence>
			<MotionDiv
				ref={ref}
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
				exit="hidden"
				variants={combinedVariants}
				transition={{
					delay: 0.04 + delay,
					duration,
					ease: 'easeOut',
				}}
				className={className}
			>
				{children}
			</MotionDiv>
		</AnimatePresence>
	);
};

export default BlurFade;
