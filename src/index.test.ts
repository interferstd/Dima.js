import * as ENV from 'dotenv';
ENV.config();

test('Проверка окружения и наличия токена', () => {
	expect(process.env.TOKEN).not.toBeUndefined();
});