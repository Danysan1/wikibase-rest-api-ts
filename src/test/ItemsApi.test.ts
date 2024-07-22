import { API_BASE_PATH, BEARER_TOKEN, ENTITY, ENTITY_ALIAS, ENTITY_DESCRIPTION, ENTITY_INSTANCE_ID, ENTITY_INSTANCE_VALUE, ENTITY_LABEL, INSTANCE_PROPERTY } from "./constants";
import { Configuration, ItemsApi } from "../../dist";
// import { ItemsApi } from "wikibase-rest-api-ts";

const api = new ItemsApi(new Configuration({
    basePath: API_BASE_PATH,
    headers: BEARER_TOKEN ? { Authorization: "Bearer " + BEARER_TOKEN } : undefined
}));

test("getItem", async () => {
    const item = await api.getItem({ itemId: ENTITY });

    expect(item).toBeTruthy();
    expect(typeof item).toMatch("object");
    expect(item.id).toMatch(ENTITY);
    expect(item.labels?.en).toMatch(ENTITY_LABEL);
    expect(item.descriptions?.en).toMatch(ENTITY_DESCRIPTION);
    expect(item.aliases?.en).toContain(ENTITY_ALIAS);
    expect(item.statements).toBeTruthy();
    expect(Object.keys(item.statements || {})).toContain(INSTANCE_PROPERTY);

    const stats = item.statements?.[INSTANCE_PROPERTY];
    expect(stats).toBeTruthy();
    expect(Array.isArray(stats)).toBeTruthy();

    const stat = stats?.find(s => s.id === ENTITY_INSTANCE_ID);
    expect(stat).toBeTruthy();
    expect(stat?.property?.id).toMatch(INSTANCE_PROPERTY);
    expect(stat?.value?.content).toMatch(ENTITY_INSTANCE_VALUE);
});

test("getItem with fields", async () => {
    const item = await api.getItem({ itemId: ENTITY, fields: ["labels"] });

    expect(item).toBeTruthy();
    expect(typeof item).toMatch("object");
    expect(item.id).toMatch(ENTITY);
    expect(item.labels?.en).toMatch(ENTITY_LABEL);
    expect(item.descriptions).toBeFalsy();
    expect(item.aliases).toBeFalsy();
    expect(item.statements).toBeFalsy();
});
