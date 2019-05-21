$(function () {

    describe('RSS Feeds', () => {

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('are given a defined url that is not empty', () => {
            expect(allFeeds).toBeDefined();
            // looks through the allFeeds array to see if they have a url that is not empty
            allFeeds.forEach((feed) => {
                expect(feed.url);
                expect(feed.url.length).not.toBe(0);
            })
        });

        it('are given a defined name that is not empty', () => {
            expect(allFeeds).toBeDefined();
            // looks through the allFeeds array to see if they have a name that is not empty
            allFeeds.forEach((feed) => {
                expect(feed.name);
                expect(feed.name.length).not.toBe(0);
            })
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
        let body,
            menuBtn;

        beforeEach(() => {
            body = document.body;
            menuBtn = document.body.querySelector('.menu-icon-link');
        });

        it('has a default state of hidden', () => {
            expect(body.className).toBe("menu-hidden");
        });

        /* Tests if the menu button toggles the visibility by clicking 
         * it and checking if the body does not have a class of "menu-hidden"
         * then does the same thing test that it does.
         */  
        it('has a button that when toggles the menu visibility', () => {
            menuBtn.click();
            expect(body.className).not.toBe("menu-hidden");
            menuBtn.click();
            expect(body.className).toBe("menu-hidden");
        });
    });


    describe('Initial Entries', () => {
        let feedEntry;

        // Loads the feed before the test runs.
        beforeEach((done) => {
            loadFeed(0, () => {
                done()
            });
        });
        
        // Checks that the feed has more than one entry.  
        it('are loaded and displayed', () => {
            feedEntry = document.body.querySelector('.feed').querySelectorAll('.entry');
            expect(feedEntry.length).not.toBe(0);
        });

    });

    describe('New Feed Selection', () => {

        let feedOne,
        feedTwo;
        
        // Changes the feed and initializes the two feed variables to the value of the feed.
        beforeEach((done) => {
            loadFeed(0, () => {
                feedOne = document.body.querySelector('.feed');
                done();
            });
            loadFeed(1, () => {
                feedTwo = document.body.querySelector('.feed');
                done();
            });
        });
        
        // Checks that loadFeed changes the feed to new entries.
        it('actually changes the feed shown.', () => {
            expect(feedOne).not.toEqual(feedTwo);
        });

    });

}());