import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

export type MainAxisAlignment = 'spaceAround' | 'spaceBetween' | 'spaceEvenly' | 'start' | 'end' | 'center';
export type CrossAxisAlignment = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type MainAxisSize = 'min' | 'max';

interface LayoutInterface {
	children: any;
	style?: React.CSSProperties;
	/**
	 * space allocated in between 2 children
	 */
	gap?: string;
	onClick?: (items: any) => any;
	/**
	 * how the children should be placed along the main axis
	 * @default start
	 */
	mainAxisAlignment?: MainAxisAlignment;
	/**
	 * how the children should be placed along the main axis
	 * @default center
	 */
	crossAxisAlignment?: CrossAxisAlignment;
}

interface RowLayout extends LayoutInterface {
	/**
	 * how much space should be occupied in the main axis
	 * @default max
	 */
	mainAxisSize?: MainAxisSize;
}

interface ColumnLayout extends LayoutInterface {
	/**
	 * how much space should be occupied in the main axis
	 * @default min
	 */
	mainAxisSize?: MainAxisSize;
}

export function getMainAxisAlignment(alignment: MainAxisAlignment): string {
	switch (alignment) {
		case 'spaceAround': return 'space-around';
		case 'spaceBetween': return 'space-between';
		case 'spaceEvenly': return 'space-evenly';
		case 'center': return "center";
		case 'start': return "flex-start";
		case 'end': return "flex-end";
	}
}
export function getCrossAxisAlignment(alignment: CrossAxisAlignment): string {
	switch (alignment) {
		case 'center': return "center";
		case 'start': return "flex-start";
		case 'end': return "flex-end";
		case 'stretch': return "stretch";
		case 'baseline': return "baseline";
	}
}
function getMainAxisSize(alignment: MainAxisSize): string {
	switch (alignment) {
		case 'min': return "fit-content";
		case 'max': return "100%";
	}
}

export function MyRow(
	{
		mainAxisAlignment = 'start', crossAxisAlignment = 'center', mainAxisSize = 'max', children, style, onClick, gap,
	}: RowLayout
) {

	var mStyle: React.CSSProperties = {
		display: "flex", flexDirection: "row",
		minWidth: 0, minHeight: 0, gap,
		width: getMainAxisSize(mainAxisSize),
		cursor: onClick ? "pointer" : undefined,
		justifyContent: getMainAxisAlignment(mainAxisAlignment),
		alignItems: getCrossAxisAlignment(crossAxisAlignment),
		...style
	};

	const styleString = JSON.stringify(mStyle, null)
	return (
		<>
			<CodeBlock language="jsx"
				showLineNumbers={false}
				text={`<div style=${styleString}></div>`}
				theme={dracula}
			/>
			<APFlex mStyle={{ ...mStyle, backgroundColor: "lightgray" }} onClick={onClick}>

				{children}
			</APFlex>
		</>
	);
}



export function MyColumn(
	{
		mainAxisAlignment = 'start', crossAxisAlignment = 'center', mainAxisSize = 'min', children, style, gap, onClick,
	}: ColumnLayout
) {

	var mStyle: React.CSSProperties = {
		display: "flex", flexDirection: "column",
		minWidth: 0, minHeight: 0, width: "100%", gap,
		height: getMainAxisSize(mainAxisSize),
		cursor: onClick ? "pointer" : undefined,
		justifyContent: getMainAxisAlignment(mainAxisAlignment),
		alignItems: getCrossAxisAlignment(crossAxisAlignment),
		...style
	};

	const styleString = JSON.stringify(mStyle, null)
	return (
		<>
			{/* <Column crossAxisAlignment="stretch" style={{ overflow: "auto", overflowX: "hidden" }}> */}
			<CodeBlock language="jsx"
				showLineNumbers={false}
				text={`<div style=${styleString}></div>`}
				theme={dracula}
			/>
			{/* </Column> */}
			<APFlex mStyle={{ ...mStyle, backgroundColor: "lightgray" }} onClick={onClick}>
				{children}
			</APFlex>
		</>
	);
}
function APFlex(props: { mStyle: React.CSSProperties; onClick?: (items: any) => any; children: any; }) {
	return (
		<div style={props.mStyle} onClick={props.onClick}>
			{props.children}
		</div>
	);
}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export function Square({ size = 40, color }: { size?: number; color?: string }) {
	return (<div style={{ minHeight: `${size}px`, minWidth: `${size}px`, background: color ?? getRandomColor() }}></div>)
}

export function APClone(props: {
	style?: React.CSSProperties,
	children?: React.ReactElement,
	noClone?: boolean
}) {
	if (props.children == null) {
		return <div style={props.style}></div>
	}

	if (props.noClone) {
		return <div style={{ ...props.style, ...props.children?.props.style }}>{props.children}</div>
	}

	var newStyle = { ...props.style, ...props.children?.props.style, };
	return React.cloneElement(props.children, { style: newStyle });
}

export function MyExpanded({ flex = 1, children, style, noClone = false }: {
	children: React.ReactElement
	flex?: number
	style?: React.CSSProperties
	noClone?: boolean
}) {

	return (
		<APClone style={{ ...style, flex: flex, minHeight: 0, minWidth: 0 }} noClone={noClone}>
			{children}
		</APClone>
	);
}