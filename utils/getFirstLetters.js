export default function getFirstLetters(sentence) {
    // Split the sentence into words
    const words = sentence?.split(' ');

    // Extract the first letter of each word
    const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

    return firstLetters;
}