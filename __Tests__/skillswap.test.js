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
 