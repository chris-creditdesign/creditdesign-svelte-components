import { expect, test } from 'vitest'
import { createNavigationMap } from './create-navigation-map.ts';

const parent1 = { path: "/css/", order: 0, title: "This is the CSS page", key: "css", parent: "" };
const parent2 = { path: "/about/", order: 1, title: "This is the about page", key: "about", parent: "" };
const child1 = { path: "/css/layout/", order: 0, title: "This is the layout page", key: "layout", parent: "css" };
const child2 = { path: "/css/utility/", order: 1, title: "This is the utility page", key: "utility", parent: "css" };
const grandChild1 = { path: "/css/layout/cluster/", order: 0, title: "Cluster layout", key: "cluster", parent: "layout" };
const grandChild2 = { path: "/css/layout/stack/", order: 1, title: "Stack layout", key: "stack", parent: "layout" };

test('should organize nodes into a map grouped by parent', () => {
    const nodes = [parent1, parent2, child1];

    const result = createNavigationMap(nodes);

    expect(result.size).toBe(2);
    expect(result.get('')).toEqual([
        { path: "/css/", order: 0, title: "This is the CSS page", key: "css", parent: "" },
        { path: "/about/", order: 1, title: "This is the about page", key: "about", parent: "" }
    ]);
    expect(result.get('css')).toEqual([
        { path: "/css/layout/", order: 0, title: "This is the layout page", key: "layout", parent: "css" }
    ]);
});

test('should return an empty map when no nodes are provided', () => {
    const nodes: any[] = [];
    const result = createNavigationMap(nodes);

    expect(result.size).toBe(0);
});

test('should handle nodes with the same parent correctly', () => {
    const nodes = [parent1, child1, child2];

    const result = createNavigationMap(nodes);

    expect(result.get('css')).toEqual([
        { path: "/css/layout/", order: 0, title: "This is the layout page", key: "layout", parent: "css" },
        { path: "/css/utility/", order: 1, title: "This is the utility page", key: "utility", parent: "css" }
    ]);
});

test('should handle grandchildren correctly', () => {
    const nodes = [child1, grandChild1, grandChild2];

    const result = createNavigationMap(nodes);

    expect(result.get('layout')).toEqual([
        { path: "/css/layout/cluster/", order: 0, title: "Cluster layout", key: "cluster", parent: "layout" },
        { path: "/css/layout/stack/", order: 1, title: "Stack layout", key: "stack", parent: "layout" }
    ]);
});
