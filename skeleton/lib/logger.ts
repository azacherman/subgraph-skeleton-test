import pino from 'pino';

// TODO need to add the appropriate transports for lambda
export default pino({ level: process.env.LOG_LEVEL || 'info' });
