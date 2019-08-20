import { findSettingByKey } from './utils';

describe('findSettingByKey()', function () {
  it('works with arrayed keys', function () {
    const key = [ "a", "b" ]
    const settings = [{ key }]

    const result1 = findSettingByKey(settings, key)
    const result2 = findSettingByKey(settings, ["a", "c"])

    expect(result1).toBe(settings[0])
    expect(result2).toBeUndefined()
  });

  it('works with stringed keys', function () {
    const key = "a"
    const settings = [{ key }]

    const result1 = findSettingByKey(settings, key)
    const result2 = findSettingByKey(settings, "b")

    expect(result1).toBe(settings[0])
    expect(result2).toBeUndefined()
  });
});
