import { Tamagotchi } from './../src/Tamagotchi.js'

describe("Tama", () => {
  jest.useFakeTimers();
  let tama;

  beforeEach(function () {
    tama = new Tamagotchi('Tama');
    tama.setHunger();
    tama.setSleep();
    tama.setPlayful();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  //////------FOOD Level //////////////////////////////////////////////////////
  test('should have a name and food level of 10 when created', () => {
    expect(tama.name).toEqual("Tama");
    expect(tama.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3000);
    expect(tama.foodLevel).toEqual(7);
  });

  test('should be hungry if the food level drops below zero', function () {
    tama.foodLevel = 0;
    expect(tama.areYouStarving()).toEqual(true);
  });

  test("should get very hungry if 10 seconds pass without food ", () => {
    jest.advanceTimersByTime(10001);
    expect(tama.areYouStarving()).toEqual(true);
  });

  test("should have food level of 10 when fed", () => {
    jest.advanceTimersByTime(8001);
    tama.feed();
    expect(tama.foodLevel).toEqual(10);
  });

  test("timer should wait for 2 seconds after feeding", () => {
    tama.waiting();
    expect(tama.wait).toBe(true)
    jest.advanceTimersByTime(2002);
    expect(tama.wait).toBe(false)
  });

  test("should see an alert message when the food level is 3 or below", () => {
    jest.advanceTimersByTime(7001);
    expect(tama.messageFood()).toEqual("I'm hungry!");
  });

  test("should increase food level by 1, when given a snack when foodLevel is at 2", () => {
    jest.advanceTimersByTime(8001);
    tama.feedSnack();
    expect(tama.foodLevel).toEqual(3);
  });
  test("should not increase foodLevel by 1 if foodLevel is at 9", () => {
    jest.advanceTimersByTime(1001);
    expect(tama.foodLevel).toEqual(9);
    expect(tama.feedSnack()).toEqual("Im full");
  });



  //sleep level////////////////////////////////////////
  test("should have a sleep level of 10 when created", () => {
    expect(tama.sleepLevel).toEqual(10);
  });

  test("should have a sleep level of 7 after 3001 milliseconds", () => {
    jest.advanceTimersByTime(3001);
    expect(tama.sleepLevel).toEqual(7);
  });

  test("should be tired if the sleep level drops below zero", () => {
    tama.sleepLevel = 0;
    expect(tama.areYouSleepy()).toEqual(true);
  });

  test("should get very sleepy if 10 seconds pass without sleep", () => {
    jest.advanceTimersByTime(10001);
    expect(tama.areYouSleepy()).toEqual(true);
  });

  test("should have sleep level of 10 after sleeeping", () => {
    jest.advanceTimersByTime(8001);
    tama.sleep();
    expect(tama.sleepLevel).toEqual(10);
  });

  test("timer should wait for 5 seconds after sleeping", () => {
    tama.waiting2();
    expect(tama.wait).toBe(true)
    jest.advanceTimersByTime(5001);
    expect(tama.wait).toBe(false)
  });

  test("should see an alert message when the sleep level is 3 or below", () => {
    jest.advanceTimersByTime(7001);
    expect(tama.messageSleep()).toEqual("I'm sleepy!");
  });

  test("should add 5 levels when it takes a quick nap but only if sleepLevel is at 5", () => {
    jest.advanceTimersByTime(2001);
    tama.nap();
    expect(tama.sleepLevel).toEqual(8);
  });

  test("should not increase sleepLevel by 5 if sleepLevel is at 9", () => {
    jest.advanceTimersByTime(1001);
    expect(tama.sleepLevel).toEqual(9);
    expect(tama.nap()).toEqual("Im not Tired");
  });


  //playful level////////////////////////////////////////
  test('should have playful level of 10 when created', () => {
    expect(tama.playfulLevel).toEqual(10);
  });

  test('should have a playful level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tama.playfulLevel).toEqual(7);
  });

  test("should be mad if the playful level drops below zero", () => {
    tama.playfulLevel = 0;
    expect(tama.areYouMad()).toEqual(true);
  });

  test("should get very angry if 10 seconds pass without any play", () => {
    jest.advanceTimersByTime(10001);
    expect(tama.areYouMad()).toEqual(true);
  });

  test("should have full playful level of 10 after playing", () => {
    jest.advanceTimersByTime(8001);
    tama.play();
    expect(tama.playfulLevel).toEqual(10);
  });

  test("timer should wait for 4 seconds after playing", () => {
    tama.waiting3();
    expect(tama.wait).toBe(true)
    jest.advanceTimersByTime(4001);
    expect(tama.wait).toBe(false)
  });

  test("should increase play level by 3, when given a toy when playfulLevel is at 6", () => {
    jest.advanceTimersByTime(7001);
    tama.giveToy();
    expect(tama.playfulLevel).toEqual(6);
  });
  
  test("should not increase playfulLevel by 3 if playfulLevel is at 9", () => {
    jest.advanceTimersByTime(1001);
    expect(tama.playfulLevel).toEqual(9);
    expect(tama.giveToy()).toEqual("NO!!!");
  });

  //----Tama Dies ///////////////////////////////////////////////////
  
  test("should show messge, I'm enjoying life" , () => {
    jest.advanceTimersByTime(1001);
    tama.aliveCheck();
    expect(tama.aliveCheck()).toBe("I'm enjoying life");
  });
  
  test("should show message, Im good", () => {
    jest.advanceTimersByTime(8001);
    tama.aliveCheck();
    expect(tama.aliveCheck()).toBe("Im good");
  });
  
  test("should kill Tama if the food, sleep and play levels equal 0 in 10 seconds", () => {
    jest.advanceTimersByTime(10001);
    tama.aliveCheck();
    expect(tama.aliveCheck()).toBe("Your Tamagotchi is dead!");
  });
});








