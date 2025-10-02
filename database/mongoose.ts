import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cache = global.mongooseCache;

if (!cache) {
    cache = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
    if(!MONGODB_URI) throw new Error("Please provide a MONGODB_URI in the environment variables");

    if(cache.conn) return cache.conn;

    if(!cache.promise) {
        cache.promise = mongoose.connect(MONGODB_URI, {bufferCommands: false});
    }

    try {
        cache.conn = await cache.promise;
    } catch(err) {
        cache.promise = null;
        throw err;
    }

    console.log(`Connected to MongoDB successfully : ${process.env.NODE_ENV} - ${MONGODB_URI}`);
    return cache.conn;
};