import { Options } from "./quartz/components/ExplorerNode";


export const mapFn: Options["mapFn"] = (node) => {
    if (node.depth > 0) {
        if (node.file) {
          node.displayName = "🗉 " + node.displayName
        } else {
          node.displayName = "🗁 " + node.displayName
        }
    }
}


export const filterFn: Options["filterFn"] = (node) => {
    // set containing names of everything you want to filter out
    const omit = new Set(["authoring content", "tags", "hosting"])
    return !omit.has(node.name.toLowerCase())
}


export const sortFn: Options["sortFn"] = (a, b) => {
    const nameOrderMap: Record<string, number> = {
        "projects": 100,
        "areas": 200,
        "resources": 300,
        "archive": 400,
    };

    // Determine if the items are folders or files
    const isAFolder = !a.file;
    const isBFolder = !b.file;

    // Prioritize folders over files
    if (isAFolder && !isBFolder) {
    return -1; // a (folder) comes before b (file)
    } else if (!isAFolder && isBFolder) {
    return 1; // b (folder) comes before a (file)
    }

    // Both are either folders or files, use nameOrderMap
    let orderA = 0;
    let orderB = 0;

    if (a.file && a.file.slug) {
    orderA = nameOrderMap[a.file.slug] || 0;
    } else if (a.name) {
    orderA = nameOrderMap[a.name] || 0;
    }

    if (b.file && b.file.slug) {
    orderB = nameOrderMap[b.file.slug] || 0;
    } else if (b.name) {
    orderB = nameOrderMap[b.name] || 0;
    }

    return orderA - orderB;
}