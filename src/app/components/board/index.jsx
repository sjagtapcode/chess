import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDrag } from 'react-dnd'
import pieces from '../../../images/pieces';
import circleIcon from './empty.png';

const useStyles = makeStyles({
	container: {
		border: '2px solid green',
		width: '640px',
		height: '640px',
	},
	greenSquare: {
		backgroundColor:'green',
		width:"80px",
		height:"80px",
	},
	whiteSquare: {
		backgroundColor:'white',
		width:"80px",
		height:"80px",
	},
	piece: {
		height: '72px',
		width: '72px',
	},
	margin4: {
		margin: '4px',
	},
	selectedSquare: {
		border: '4px solid red',
		width:"72px",
		height:"72px",
	},
	canMove: {
		backgroundImage: `url(${circleIcon})`,
		backgroundSize: '70px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		opacity: '0.5',
	},
});

const keyMap = ['a','b','c','d','e','f','g','h'];

const Board = ({
	side,
	board,
	chess,
	handleMove,
}) => {
	const classes = useStyles();
	const [selectedSquare, setSelectedSquare] = useState({ x: -1, y: -1 });
	const handleSelect = (x, y, square) => {
		if(square?.length && !(selectedSquare.x === x && selectedSquare.y === y)) {
			setSelectedSquare({ x, y });
			console.log('ass',chess.ascii());
			return;
		}
		setSelectedSquare({ x: -1, y: -1 });
	};

	const handleMoveClick = (move) => {
		handleMove(move);
		setSelectedSquare({ x: -1, y: -1 });
	};

	const moves = chess?.moves({ square: keyMap[(selectedSquare.y)] + (8 - (selectedSquare.x)).toString()});
	console.log('moves', moves);

	return (
		<div className={classes.container}>
			{board.map((row, i) => (
				<Grid container>
					{row.map((square, j) => {
						const squareString = keyMap[(j)] + (8 - (i)).toString();
						const moveIndex = moves?.find((m) => m.slice(m.length - 2) === squareString) ?? -1;
						console.log('inde', moveIndex);
						// const moveIndex = -1;
						const canMove = moveIndex !== -1;
						const isSquareSelected = (selectedSquare.x === i && selectedSquare.y === j);
						const isAnySquareSelected = !(selectedSquare.x === -1 && selectedSquare.y === -1);
						return (
							<Grid item key={`${i}-${j}`}>
								<div
									className={clsx(
										((i+j)%2 === 0) ? classes.whiteSquare : classes.greenSquare,
										isSquareSelected ? classes.selectedSquare : '',
										canMove ? classes.canMove : '',
									)}
									onClick={() => isAnySquareSelected ? handleMoveClick(moveIndex) : handleSelect(i, j, square)}
								>{square ?
									<img
										src={pieces[square]}
										className={clsx(
											classes.piece,
											isSquareSelected ? '' : classes.margin4,
										)}
									/>
									: ''
								}
								</div>
							</Grid>
						);
					}
				)}
				</Grid>
			))}
		</div>
	)
}

export default Board;
