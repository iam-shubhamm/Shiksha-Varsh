import { describe, expect, it } from 'vitest';
import { getUpperSubject } from '@/data/upper/curriculum';

describe('Audited curriculum corrections', () => {
  it.each([[4,12,13,14,10],[5,10,12,15,10]])('uses current primary books for Class %i', (grade,en,hi,maths,evs) => {
    for (const [id,count] of [['english',en],['hindi',hi],['maths',maths],['evs',evs]] as const) {
      expect(getUpperSubject(grade,'cbse',id)?.chapters.length).toBe(count);
    }
  });
  it.each([[7,15,10,15,12,20],[8,15,10,14,13,15],[9,16,12,14,13,15]])('uses both parts of current Class %i books', (grade,en,hi,maths,science,sst) => {
    for (const [id,count] of [['english',en],['hindi',hi],['maths',maths],['science',science],['sst',sst]] as const) {
      expect(getUpperSubject(grade,'cbse',id)?.chapters.length).toBe(count);
    }
  });
  it('includes all three Hindi A supplementary readings in Class 10', () => {
    expect(getUpperSubject(10,'cbse','hindi')?.chapters).toEqual(expect.arrayContaining(['माता का अँचल (कृतिका)','साना-साना हाथ जोड़ि… (कृतिका)','मैं क्यों लिखता हूँ? (कृतिका)']));
  });
  it('keeps ICSE drama acts in the correct class', () => {
    expect(getUpperSubject(9,'icse','english')?.chapters.filter(x => x.startsWith('Julius Caesar'))).toEqual(['Julius Caesar — Act I','Julius Caesar — Act II']);
    expect(getUpperSubject(10,'icse','english')?.chapters.filter(x => x.startsWith('Julius Caesar'))).toEqual(['Julius Caesar — Act III','Julius Caesar — Act IV','Julius Caesar — Act V']);
  });
});

import { getPrimarySubject } from '@/data/primary-curriculum';
describe('Class 1–2 NCERT books', () => {
  it.each([[1,'english',9],[1,'hindi',19],[1,'maths',13],[2,'english',13],[2,'hindi',26],[2,'maths',11]])('Class %i %s has %i chapters', (g,s,n) => {
    expect(getPrimarySubject(g as number, s as string)?.chapters.length).toBe(n);
  });
});
