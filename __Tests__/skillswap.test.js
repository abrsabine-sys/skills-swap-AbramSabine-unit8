const { filterSkillsByCategory } = require('../skillswap-functions');

describe('filterSkillsByCategory', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 }
  ];

  test('filters by category', () => {
    const result = filterSkillsByCategory(skills, 'Programming');
    expect(result.length).toBe(1);
  });

  test('returns all skills when category is All', () => {
    expect(filterSkillsByCategory(skills, 'All').length).toBe(3);
  });

  test('returns empty array for no matches', () => {
    expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
  });
});

const { calculateTotalCost } = require('../skillswap-functions');

describe('calculateTotalCosts', () => {
  test('calculates normal cost', () => {
    expect(calculateTotalCost(20, 2)).toBe(40);
  });

  test('handles free sessions', () => {
    expect(calculateTotalCost(0, 3)).toBe(0);
  });

  test('handles decimal hours', () => {
    expect(calculateTotalCost(25, 1.5)).toBe(37.5);
  });

  test('handles zero hours', () => {
    expect(calculateTotalCost(20, 0)).toBe(0);
  });
});

 const { matchSkillsToUser } = require('../skillswap-functions');

describe('matchSkillsToUser', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Resume Review', category: 'Career', price: 0 }
  ];

  test('matches by category and price', () => {
    const user = { category: 'Programming', maxPrice: 25 };
    expect(matchSkillsToUser(user, skills).length).toBe(1);
  });

  test('includes free skills', () => {
    const user = { category: 'Career', maxPrice: 0 };
    expect(matchSkillsToUser(user, skills).length).toBe(1);
  });
});
