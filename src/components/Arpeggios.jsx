const flat = "\u266D"
const sharp = "\u266F"

const Arpeggios = [
    ['Major', 'Minor', 'Augmented', 'Diminished', 'Major 7th', 'Minor 7th', 'Dominant 7th', 'Half Diminished 7th', 'Diminished 7th', 'Major 9', 'Minor 9', 'Dominant 9', 'Dominant 7'+flat+'9'
    ,'Dominant 7'+sharp+'5'+flat+'9', 'Dominant 7'+sharp+'5'+sharp+'9', 'Minor 9'+flat+'5', 'Major 9'+sharp+'5', 'Minor/Major 9'],
    [[4, 7], [3, 7], [4, 8], [3, 6], [4,7,11], [3, 7, 10], [4, 7, 10], [3, 6, 10], [3, 6, 9], [2, 4, 7, 11], [2, 3, 7, 10], [2, 4, 7, 10], [1, 4, 7, 10], [1, 4, 8, 10]
    , [3, 4, 8, 10], [2, 3, 6, 10], [2, 4, 8, 11], [2, 3, 7, 11]]
]
export default Arpeggios;