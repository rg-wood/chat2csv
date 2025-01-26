"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCsv = void 0;
exports.toCsv = (messages) => {
    const header = 'actor,type,message,timestamp\n';
    return header +
        messages
            .map(renderMessage)
            .join('\n');
};
const renderMessage = (message) => {
    return `"${message.actor}",${message.type},"${message.message}",${message.timestamp !== undefined ? message.timestamp.toISOString() : ''}`;
};
