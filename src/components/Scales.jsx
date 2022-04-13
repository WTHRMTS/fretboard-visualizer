const flat = "\u266D"
const sharp = "\u266F"
const natural = "\u266E"
const Scales = [
    ['Major/Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor/Aeolian', 'Locrian', 'Pentatonic Major', 'Pentatonic Minor', 'Blues Scale',
'Harmonic Minor', 'Locrian '+ natural + '6', 'Ionian '+ sharp + '5' , 'Dorian ' + sharp + '11', 'Phrygian Dominant', 'Lydian '+ sharp + '2', 'Super Locrian '+ flat + flat + '7'
,'Harmonic Major', 'Dorian '+flat+'5', 'Altered Dominant '+natural+'5', 'Melodic Minor '+sharp+'4', 'Mixolydian '+flat+'2', 'Lydian Augmented '+sharp+'2', 'Locrian '+flat+flat+'7'
,'Melodic Minor (Ascending)', 'Dorian '+ flat + '2', 'Lydian '+ sharp + '5', 'Lydian Dominant', 'Mixolydian ' + flat + '6', 'Aeolian '+ flat + '5', 'Altered Scale', 'Whole Tone Scale', 'Hirajoshi Scale',
'Iwato Scale', 'Arabic Scale', 'Kamavardhani Raga'], 
[[2, 4, 5, 7, 9, 11], [2, 3, 5, 7, 9, 10], [1, 3, 5, 7, 8, 10], [2, 4, 6, 7, 9, 11], 
[2, 4, 5, 7, 9, 10], [2, 3, 5, 7, 8, 10], [1, 3, 5, 6, 8, 10], [2, 4, 7, 9], [3, 5, 7, 10], [3, 5, 6, 7, 10], [2, 3, 5, 7, 8, 11], 
[1, 3, 5, 6, 9, 10], [2, 4, 5, 8, 9, 11], [2, 3, 6, 7, 9, 10], [1, 4, 5, 7, 8, 10], [3, 4, 6, 7, 9, 11], [1, 3, 4, 6, 8, 9], 
[2, 4, 5, 7, 8, 11], [2, 3, 5, 6, 9, 10], [1, 3, 4, 7, 8, 10], [2, 3, 6, 7, 9, 11], [1, 4, 5, 7, 9, 10], [3, 4, 6, 8, 9, 11], [1, 3, 5, 6, 8, 9],
[2, 3, 5, 7, 9, 11], [1, 3, 5, 7, 9, 10, 12], [2, 4, 6, 8, 9, 11, 12], [2, 4, 6, 7, 9, 10], [2, 4, 5, 7, 8, 10], [2, 3, 5, 6, 8, 10], 
[1, 3, 4, 6, 8, 10],[2, 4, 6, 8, 10], [2, 3, 7, 8], [1, 5, 6, 10], [1, 4, 5, 7, 8, 11], [1, 4, 6, 7, 8, 11]]
]
export default Scales;