/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { GameProvider } from './contexts/game.context';

render(() => {

	return <>
		<GameProvider>
			<App />
		</GameProvider>
	</>
},
document.getElementById('root') as HTMLElement);
