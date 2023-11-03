import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers'
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Counter', () => {
    const deployCounterFixture = async () => {
        const counter = await ethers.deployContract('Counter')
        return counter
    }

    it('Should set the counter properly', async () => {
        const counter = await loadFixture(deployCounterFixture)

        await counter.set(10)
        expect(await counter.get()).to.equal(10)
    })

    it('Should get the counter properly', async () => {
        const counter = await loadFixture(deployCounterFixture)

        // initial value is zero
        expect(await counter.get()).to.equal(0)

        await counter.set(99)
        expect(await counter.get()).to.equal(99)
    })

    it('Should increment counter correctly', async () => {
        const counter = await loadFixture(deployCounterFixture)

        await counter.inc()
        expect(await counter.get()).to.equal(1)

        await counter.set(99)
        await counter.inc()
        expect(await counter.get()).to.equal(100)
    })
})