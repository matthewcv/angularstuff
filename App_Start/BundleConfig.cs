using System.Web;
using System.Web.Optimization;

namespace angularstuff
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/scriptsbundle")
                .Include("~/bower_components/angular/angular.js",
                "~/bower_components/angular-ui-router/release/angular-ui-router.js"

                ).IncludeDirectory("~/Scripts","*.js",true));

            bundles.Add(new StyleBundle("~/cssbundle").Include(
                      "~/bower_components/bootstrap/dist/css/bootstrap.min.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            //BundleTable.EnableOptimizations = true;
        }
    }
}
