import * as ENV from 'dotenv';
import { Dima } from './dima.js';
ENV.config();

test('Сборочное тестирование конечного функционала', ()=> {
	const dima = new Dima(process.env.TOKEN);

	dima.config = {
		admins: ['1234567', '123123'],
		folders: {
			'Designer': '../telegram-huegram'
		}
	};

	// dima.use();

	// dima.admins = ['1234567', '62345234'];
	// dima.folders = {
	// 	'Designer': '../telegram-huegram'
	// };

	dima.add.command('Update', ()=>{
		dima.utils.update(dima.folders);
		// dima.make('git pull');
	});

	// dima.add.process()

	dima.launch();
});