/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden font-sans bg-[#f7f9fd]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

