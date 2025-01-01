import { describe, it, expect } from 'vitest';
import { pascalCase } from './pascal-case.ts';

describe('pascalCase', () => {
	it('should convert a kebab-case string to PascalCase', () => {
		expect(pascalCase('hello-world')).toBe('HelloWorld');
		expect(pascalCase('my-component')).toBe('MyComponent');
		expect(pascalCase('pascal-case')).toBe('PascalCase');
	});

	it('should handle single word strings', () => {
		expect(pascalCase('hello')).toBe('Hello');
		expect(pascalCase('world')).toBe('World');
	});

	it('should handle empty strings', () => {
		expect(pascalCase('')).toBe('');
	});
});
