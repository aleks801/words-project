import { Word, WordType } from './Word';

const getTestWord = () => {
    const testWord = new Word();
    testWord.id = 1;
    testWord.translation = 'Translation';
    testWord.text = 'Text';
    return testWord;
};

describe('checkAnswer', () => {
    it('should return TRUE if words are equal', () => {
        const testWord = getTestWord();
        expect(testWord.checkAnswer(testWord)).toEqual(true);
    });
    
    it('should return TRUE if answer is correct', () => {
        const testWord = getTestWord();
        expect(testWord.checkAnswer(testWord.translation)).toEqual(true);
    });
});

describe('incrementCorrectCounter', () => {
    it('should increment introductionCorrectAnswers for Intro word', () => {
        const testWord = getTestWord();
        testWord.incrementCorrectCounter();
        expect(testWord.introductionCorrectAnswers).toEqual(1);
    });
    
    it('should set repeatingExpirationDate for Repeating word', () => {
        const testWord = getTestWord();
        testWord.type = WordType.Repeating;
        testWord.incrementCorrectCounter();
        expect(testWord.repeatingExpirationDate).not.toEqual(null);
    });
});