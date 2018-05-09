import { GondelComponent } from "./GondelComponent";
export declare type ArrayLikeHtmlElement = Element | Element[] | NodeListOf<Element> | ArrayLike<Element>;
/**
 * This function normalizes takes one of the following:
 *  + document query result
 *  + dom node array
 *  + jquery object
 *  + a single dom node
 * and turns it into a single dom node
 */
export declare function getFirstDomNode(domNode: ArrayLikeHtmlElement): HTMLElement;
/**
 * Start all nodes in the given context
 */
export declare function startComponents(domContext?: ArrayLikeHtmlElement, namespace?: string): Promise<Array<GondelComponent>>;
/**
 * Stop all nodes in the given context
 */
export declare function stopComponents(domContext?: ArrayLikeHtmlElement, namespace?: string): void;
/**
 * Returns the gondel instance for the given HtmlELement
 */
export declare function getComponentByDomNode(domNode: ArrayLikeHtmlElement, namespace?: string): GondelComponent | undefined;
/**
 * Returns the gondel instance for the given HtmlELement once it is booted
 */
export declare function getComponentByDomNodeAsync(domNode: ArrayLikeHtmlElement, namespace?: string): Promise<GondelComponent>;
/**
 * Returns all components inside the given node
 */
export declare function findComponents(domNode?: ArrayLikeHtmlElement, componentName?: string, namespace?: string): Array<GondelComponent>;