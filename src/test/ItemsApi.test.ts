import { Q1_P31_ID, Q1_P31_VALUE } from "./constants";
import { ItemsApi } from "../../dist";
// import { ItemsApi } from "wikibase-rest-api-ts";

const api = new ItemsApi();

test("getItem", async () => {
    const item = await api.getItem({ itemId: "Q1" });
    expect(item).toBeTruthy();
    expect(typeof item).toMatch("object");
    expect(item.id).toMatch("Q1");
    expect(item.labels?.en).toMatch(/universe/i);
    expect(item.descriptions?.en).toMatch(/space/i);
    expect(item.aliases?.en).toContain("cosmos");

    const stats = item.statements?.P31;
    expect(stats).toBeTruthy();

    const stat = stats?.find(s => s.id === Q1_P31_ID);
    expect(stat).toBeTruthy();
    expect(stat?.property?.id).toMatch("P31");
    expect(stat?.value?.content).toMatch(Q1_P31_VALUE);
});

test("getItem", async () => {
    const item = await api.getItem({ itemId: "Q1", fields: ["labels"] });
    expect(item).toBeTruthy();
    expect(typeof item).toMatch("object");
    expect(item.id).toMatch("Q1");
    expect(item.labels?.en).toMatch(/universe/i);
    expect(item.descriptions).toBeFalsy();
    expect(item.aliases).toBeFalsy();
    expect(item.statements).toBeFalsy();
});
