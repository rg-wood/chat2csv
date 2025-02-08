"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shorten = void 0;
const shortenedNames = {
    'Quinn Wheatsteal': 'Quinn',
    'Sergeant Agata': 'Agata',
    'Corporal Loth': 'Loth',
    'Ba\' Raknul': 'Ba\'Raknul',
    'Ric (GM)': 'GM',
    'Commander101#9473': 'Chris',
    'Ric#0018': 'Ric',
    'Micky#1032': 'Mark',
    'Tempest#7268': 'Morgan',
    'Orin Carver': 'Orin',
    'Kraken#1001': 'Kat',
    'newt#2465': 'Hope'
};
exports.shorten = (messages) => messages
    .map((message) => {
    const shortened = Object.assign(Object.assign({}, message), { actor: shortenedNames[message.actor] !== undefined ? shortenedNames[message.actor] : message.actor });
    return shortened;
});
