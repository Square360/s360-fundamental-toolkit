export declare class Timer {
    timer: number;
    fn: TimerHandler;
    timeout: number;
    constructor(fn: TimerHandler, timeout: number);
    stop(): this;
    start(): this;
    reset(newTimeout?: number): this;
}
