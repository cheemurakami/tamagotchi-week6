import { Tamagotchi } from './../src/Tamagotchi.js'

describe("Tama", () => {
  jest.useFakeTimers();
  let tama;

  beforeEach(function () {
    tama = new Tamagotchi('Tama');
    tama.setHunger();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

test('should have a name and food level of 10 when created' , () => {
  expect(tama.name).toEqual("Tama");
  expect(tama.foodLevel).toEqual(10);
});

test('should have a food level of 7 after 3001 milliseconds', () => {
  jest.advanceTimersByTime(3000); 
  expect(tama.foodLevel).toEqual(7);
});

test('should be hungry if the food level drops below zero', function(){
  tama.foodLevel = 0;
  expect(tama.areYouStarving()).toEqual(true);
})


});