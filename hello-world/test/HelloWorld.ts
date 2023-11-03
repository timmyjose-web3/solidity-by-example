import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('HelloWorld', () => {
    it('Should have a greet function', async () => {
        const [owner] = await ethers.getSigners()
        const helloWorld = await ethers.deployContract('HelloWorld')

        expect(helloWorld.greet).to.exist
        expect(await helloWorld.greet()).to.equal('Hello, world!')
    })
})

