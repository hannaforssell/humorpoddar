/**
* @jest-environment jsdom
*/

import * as podcastApp from "../ts/podcastApp";

jest.mock('../ts/services/podcastService');

beforeEach(() => {
    document.body.innerHTML = '';
});

describe('addPodcasts', () => {
    test('should create a single-podcast div for each returned podcast', async () => {
        // Arrange
        document.body.innerHTML = /*html*/ `<div id="podcastContainer"></div>`;
        let podcastContainer = document.getElementById('podcastContainer') as HTMLDivElement;

        // Act
        await podcastApp.addPodcasts();

        // Asserts
        let podcastDivs = podcastContainer.getElementsByClassName('single-podcast');
        expect(podcastDivs.length).toBe(3);
    });

    test('single-podcast divs should have correct names', async () => {
        // Arrange
        document.body.innerHTML = /*html*/ `<div id="podcastContainer"></div>`;
        let podcastContainer = document.getElementById('podcastContainer') as HTMLDivElement;

        // Act
        await podcastApp.addPodcasts();

        // Asserts
        let podcastDiv1 = podcastContainer.querySelectorAll('.single-podcast')[0];
        let podcastDiv2 = podcastContainer.querySelectorAll('.single-podcast')[1];
        let podcastDiv3 = podcastContainer.querySelectorAll('.single-podcast')[2];
        let podcastHeading1 = podcastDiv1.getElementsByTagName('h3')[0];
        let podcastHeading2 = podcastDiv2.getElementsByTagName('h3')[0];
        let podcastHeading3 = podcastDiv3.getElementsByTagName('h3')[0];

        expect(podcastHeading1.innerHTML).toBe('Name1');
        expect(podcastHeading2.innerHTML).toBe('Name2');
        expect(podcastHeading3.innerHTML).toBe('Name3');
    });
});
