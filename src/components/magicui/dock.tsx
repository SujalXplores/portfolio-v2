'use client';

import { type VariantProps, cva } from 'class-variance-authority';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { type PropsWithChildren, useRef } from 'react';

import { MotionDiv } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface DockProps extends VariantProps<typeof dockVariants> {
	className?: string;
	magnification?: number;
	distance?: number;
	children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
	'mx-auto w-max h-full p-2 flex items-end rounded-full border',
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
	(
		{
			className,
			children,
			magnification = DEFAULT_MAGNIFICATION,
			distance = DEFAULT_DISTANCE,
			...props
		},
		ref,
	) => {
		const mousex = useMotionValue(Number.POSITIVE_INFINITY);

		const renderChildren = () => {
			return React.Children.map(children, (child: any) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						mousex: mousex,
						magnification,
						distance,
					} as DockIconProps);
				}
				return child;
			});
		};

		return (
			<MotionDiv
				ref={ref}
				onMouseMove={(e: React.MouseEvent) => mousex.set(e.pageX)}
				onMouseLeave={() => mousex.set(Number.POSITIVE_INFINITY)}
				{...props}
				className={cn(dockVariants({ className }))}
			>
				{renderChildren()}
			</MotionDiv>
		);
	},
);

Dock.displayName = 'Dock';

export interface DockIconProps {
	magnification?: number;
	distance?: number;
	mousex?: any;
	className?: string;
	children?: React.ReactNode;
	props?: PropsWithChildren;
}

const DockIcon = ({
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	mousex,
	className,
	children,
	...props
}: DockIconProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const distanceCalc = useTransform(mousex, (val: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[40, magnification, 40],
	);

	const width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<MotionDiv
			ref={ref}
			style={{ width: width as any }}
			className={cn(
				'flex aspect-square cursor-pointer items-center justify-center rounded-full',
				className,
			)}
			{...props}
		>
			{children}
		</MotionDiv>
	);
};

DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon, dockVariants };
