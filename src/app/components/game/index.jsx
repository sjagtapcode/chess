import { makeStyles } from '@material-ui/core';
import React,{ useEffect, useState } from 'react';
import Chess from 'chess.js'
import Board from '../board';
import Player from './Player';

const useStyles = makeStyles({
	container: {
		border: '2px solid green',
		width: '700px',
		height: '800px',
	},
	board: {
		padding: '26px',
	},
	player: {

	},
});

const defaultBoard = [
	['','','','','','','',''],
	['','','','','','','',''],
	['','','','','','','',''],
	['','','','','','','',''],
	['','','','','','','',''],
	['','','','','','','',''],
	['','','','','','','',''],
	['','','','','','','',''],
];

const chessGame = new Chess();

const Game = () => {
	const classes = useStyles();
	const [side, setSide] = useState('B');
	const [board, setBoard] = useState(defaultBoard);

	const BoardUpdate = () => {
		setBoard(chessGame.board().map((arr) => (
			arr.map((col) => (
				!(col?.color && col?.type)
					? ''
					: (col.color === 'w')
						? col.type.toUpperCase()
						: col.type
			))
		)));
	};

	useEffect(() => {
		BoardUpdate();
	}, []);

	const handleMove = (move) => {
		console.log('changin', move);
		console.log(chessGame.move(move));
		console.log(chessGame.ascii());
		BoardUpdate();
	};

	return (
		<div className={classes.container}>
			<Player />
			<div className={classes.board}>
				<Board
					side={side}
					board={board}
					chess={chessGame}
					handleMove={handleMove}
				/>
			</div>
			<Player />
		</div>
	);
};

export default Game;
