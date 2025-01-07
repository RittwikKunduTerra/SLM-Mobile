import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class ReuseStrategy implements RouteReuseStrategy {
  private store_: { [key: string]: DetachedRouteHandle } = {};

  // Generate a unique key for each route, including dynamic parameters
  private getRouteKey(route: ActivatedRouteSnapshot): string {
    const path = route.routeConfig?.path || '';
    const params = route.params ? JSON.stringify(route.params) : '';
    return `${path}_${params}`;
  }

  // Check if the route should be cached
  private shouldCacheRoute(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path || '';
    // Exclude routes with dynamic segments like ':id'
    return !path.includes(':');
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.shouldCacheRoute(route); // Allow detachment only for non-dynamic routes
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (this.shouldCacheRoute(route)) {
      const key = this.getRouteKey(route);
      if (key) {
        this.store_[key] = handle;
      }
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = this.getRouteKey(route);
    return this.shouldCacheRoute(route) && !!this.store_[key];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const key = this.getRouteKey(route);
    return this.shouldCacheRoute(route) ? this.store_[key] || null : null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig; // Reuse based on route configuration
  }
}
