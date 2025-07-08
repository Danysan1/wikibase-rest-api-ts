import { API_BASE_PATH, ENTITY, ENTITY_ALIAS, PROPERTY, PROPERTY_ALIAS } from "./constants";
import { Configuration, AliasesApi, ResponseError } from "../../dist";
// import { AliasesApi } from "wikibase-rest-api-ts";

const api = new AliasesApi(new Configuration({
    basePath: API_BASE_PATH,
    headers: process.env.WB_BEARER_TOKEN ? { Authorization: "Bearer " + process.env.WB_BEARER_TOKEN } : undefined
}));

describe("Item aliases write", () => {
    if (!process.env.WB_BEARER_TOKEN) {
        test.skip("patchItemAliases + addItemAliasesInLanguage", () => { });
    } else {
        test("patchItemAliases + addItemAliasesInLanguage", async () => {
            let aliasStartingCount;
            try {
                const aliases = await api.getItemAliasesInLanguage({ itemId: ENTITY, languageCode: "en" });
                expect(aliases).toBeTruthy();
                expect(Array.isArray(aliases)).toBeTruthy();
                aliasStartingCount = aliases.length;
            } catch (e) {
                if (e instanceof ResponseError) {
                    console.error("getItemAliasesInLanguage error:", await e.response.text(), e);
                }
                throw e;
            }

            if (!aliasStartingCount) {
                throw new Error("No aliases available in english on test entity:" + ENTITY);
            } else {
                try {
                    const aliases0 = await api.patchItemAliases({
                        itemId: ENTITY,
                        patchItemRequest: {
                            patch: [{
                                op: "remove",
                                path: "/en",
                            }],
                            comment: "test patchItemAliases"
                        }
                    });
                    expect(typeof aliases0).toMatch("object");
                    expect(aliases0.en ?? []).not.toContain(ENTITY_ALIAS);
                } catch (e) {
                    if (e instanceof ResponseError) {
                        console.error("patchItemAliases error:", await e.response.text(), e);
                    }
                    throw e;
                }
            }

            try {
                const aliases1 = await api.addItemAliasesInLanguage({
                    itemId: ENTITY,
                    languageCode: "en",
                    addItemAliasesInLanguageRequest: {
                        aliases: [ENTITY_ALIAS],
                        comment: "test addItemAliasesInLanguage"
                    }
                });
                expect(aliases1).toBeTruthy();
                expect(Array.isArray(aliases1)).toBeTruthy();
                expect(aliases1).toContain(ENTITY_ALIAS);
            } catch (e) {
                if (e instanceof ResponseError) {
                    console.error("addItemAliasesInLanguage error:", await e.response.text(), e);
                }
                throw e;
            }
        });
    }
});

describe("Item aliases read", () => {
    test("getItemAliasesInLanguage", async () => {
        const aliases = await api.getItemAliasesInLanguage({ itemId: ENTITY, languageCode: "en" });
        expect(aliases).toBeTruthy();
        expect(Array.isArray(aliases)).toBeTruthy();
        expect(aliases).toContain(ENTITY_ALIAS);
    });

    test("getItemAliases", async () => {
        const aliases = await api.getItemAliases({ itemId: ENTITY });
        expect(aliases).toBeTruthy();
        expect(typeof aliases).toMatch("object");
        expect(Object.keys(aliases)).toContain("en");
        expect(aliases.en).toContain(ENTITY_ALIAS);
    });

});

describe("Property aliases read", () => {

    test("getPropertyAliasesInLanguage", async () => {
        const aliases = await api.getPropertyAliasesInLanguage({ propertyId: PROPERTY, languageCode: "en" });
        expect(aliases).toBeTruthy();
        expect(Array.isArray(aliases)).toBeTruthy();
        expect(aliases).toContain(PROPERTY_ALIAS);
    });

    test("getPropertyAliases", async () => {
        const aliases = await api.getPropertyAliases({ propertyId: PROPERTY });
        expect(aliases).toBeTruthy();
        expect(typeof aliases).toMatch("object");
        expect(Object.keys(aliases)).toContain("en");
        expect(aliases.en).toContain(PROPERTY_ALIAS);
    });

});
