import crypto from 'crypto'

const createHash=(hash)=>
    crypto.Hash('md5').update(hash).digest('hex');  

export default  createHash
